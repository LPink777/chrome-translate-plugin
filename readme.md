# Chrome 智能翻译助手

## 项目简介

Chrome 智能翻译助手是一个优雅、高效的浏览器翻译插件，为用户提供即时的中英文翻译服务。该插件采用现代化的技术栈和用户界面设计，让翻译体验更加流畅和便捷。

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/LPink777/chrome-translate-plugin/build-and-publish.yml?branch=main)
![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/YOUR_EXTENSION_ID)
![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/YOUR_EXTENSION_ID)
![GitHub](https://img.shields.io/github/license/LPink777/chrome-translate-plugin)

## 核心功能

### 1. 双面板翻译界面

- **左侧面板**：中文输入区
  - 支持多行文本输入
  - 实时输入响应
  - 自动保存输入历史
- **右侧面板**：英文翻译区
  - 实时翻译显示
  - 支持复制翻译结果
  - 提供发音功能（可选）

### 2. 用户界面设计

- 响应式布局，适配不同屏幕尺寸
- 简约现代的设计风格
- 支持明暗主题切换
- 流畅的动画过渡效果
- 优雅的加载状态展示

## 技术规范

### 开发技术栈

- **前端框架**：React 19
- **样式解决方案**：TailwindCSS
- **组件库** shadcn/ui
- **开发语言**：TypeScript
- **构建工具**：Vite
- **Chrome Extension**：Manifest V3

### 项目结构

```bash
src/
├── components/ # React 组件
├── hooks/ # 自定义 Hooks
├── services/ # API 服务
├── styles/ # 全局样式
├── types/ # TypeScript 类型定义
├── utils/ # 工具函数
└── manifest.json # 插件配置文件
```

### 开发规范

- 使用 TypeScript 强类型
- 遵循 React Hooks 最佳实践
- 采用 Functional Components
- 实现响应式设计
- 使用 ESLint 和 Prettier 进行代码规范
- 添加完整的中文注释

## 构建与发布

### 本地开发
```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 代码检查
npm run lint        # 检查 JS/TS 代码
npm run lint:style  # 检查样式代码
npm run lint:fix    # 自动修复所有可修复的问题

# 代码格式化
npm run format

# 构建生产版本
npm run build
```

### 自动构建与发布

本项目使用 GitHub Actions 实现自动构建和发布：

1. **自动构建**：
   - 每次推送到 main 分支
   - 每个 Pull Request
   - 每次发布新标签（tag）

2. **自动发布**：
   - 创建新的发布标签（如 v1.0.0）时触发
   - 自动构建并打包
   - 自动发布到 Chrome Web Store
   - 自动创建 GitHub Release

详细的发布流程和配置说明请参考：[Chrome Store 发布指南](docs/CHROME_STORE_PUBLISH.md)

## 性能指标

- 首次加载时间 < 2s
- 翻译响应时间 < 1s
- 内存占用 < 50MB

## 后续优化计划

1. 支持更多翻译语言
2. 添加离线翻译功能
3. 集成 AI 优化翻译质量
4. 添加翻译历史记录
5. 支持快捷键操作

## 安全性考虑

- 使用 HTTPS 进行数据传输
- 实现最小权限原则
- 保护用户隐私数据
- 定期安全审计

## 浏览器兼容性

- Chrome 88+
- Edge 88+（基于 Chromium）
- 其他基于 Chromium 的浏览器

## 开源协议

MIT License

## 贡献指南

欢迎提交 Issue 和 Pull Request，一起改进这个翻译插件！

提交代码时请遵循：
1. 使用 `npm run commit` 提交代码
2. 遵循 [约定式提交](https://www.conventionalcommits.org/zh-hans/) 规范
3. 确保通过所有代码检查
4. 编写必要的测试用例
5. 更新相关文档
