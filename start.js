// 简单的启动检查脚本
const fs = require('fs');
const path = require('path');

console.log('🚀 检查AI学习社团网站文件结构...\n');

// 检查关键文件
const requiredFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'package.json',
  'data/site-config.json',
  'components/hero-section.tsx',
  'components/header.tsx',
  'components/footer.tsx'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} 缺失`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log('\n🎉 所有必需文件都已就绪！');
  console.log('\n📋 下一步操作：');
  console.log('1. 运行: npm install');
  console.log('2. 运行: npm run dev');
  console.log('3. 打开浏览器访问: http://localhost:3000');
} else {
  console.log('\n⚠️  请检查缺失的文件');
}