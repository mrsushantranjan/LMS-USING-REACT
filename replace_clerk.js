const fs = require('fs');
const path = require('path');

const traverse = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('@clerk/clerk-react')) {
        let replacementPath = '../hooks/useAuth';
        if (fullPath.includes('/pages/')) replacementPath = '../hooks/useAuth';
        else if (fullPath.includes('/components/')) replacementPath = '../hooks/useAuth';
        else if (fullPath.includes('/hooks/')) replacementPath = './useAuth';
        
        // Remove import { ... } from "@clerk/clerk-react"
        content = content.replace(/import\s+{([^}]*)}\s+from\s+["']@clerk\/clerk-react["'];?/g, (match, imports) => {
          let hasUseUser = imports.includes('useUser');
          let hasUseClerk = imports.includes('useClerk');
          if (hasUseUser || hasUseClerk) {
             return `import useAuth from "${replacementPath}";`;
          }
          return '';
        });

        // Replace useUser() and useClerk() calls
        content = content.replace(/const\s+{([^}]*)}\s*=\s*useClerk\(\);/g, '');
        content = content.replace(/const\s+{([^}]*)}\s*=\s*useUser\(\);/g, (match, p1) => {
           return `const { ${p1} } = useAuth();`;
        });
        
        // Also if UserButton is imported but was removed from import, ensure no <UserButton/> error
        content = content.replace(/<UserButton[^>]*\/>/g, 'null');

        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  }
};

traverse('Frontend/src');
