# Chrome Web Store 发布指南

本文档将指导你如何设置自动发布到 Chrome Web Store 的必要配置。

## 1. 注册 Chrome Web Store 开发者账号

1. 访问 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. 支付一次性的开发者注册费（$5.00 USD）
3. 完成开发者账号设置

## 2. 创建新的 Chrome 扩展

1. 在开发者面板中点击"新建项目"
2. 选择"浏览器扩展"
3. 填写扩展的基本信息：
   - 名称：Chrome 智能翻译助手
   - 描述：一个优雅、高效的浏览器翻译插件
   - 类别：工具
4. 上传初始版本
5. 记录生成的扩展 ID（将用于 GitHub Secrets）

## 3. 获取 OAuth 2.0 凭据

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 Chrome Web Store API
4. 创建 OAuth 2.0 客户端凭据：
   - 应用类型：Desktop App
   - 名称：Chrome 翻译插件发布
5. 下载客户端凭据 JSON 文件
6. 记录 Client ID 和 Client Secret

## 4. 获取 Refresh Token

运行以下命令获取 refresh token：

```bash
# 安装工具
npm install -g chrome-webstore-upload-cli

# 获取 token
chrome-webstore-upload-cli login
```

按照提示操作，最后会得到 refresh token。

## 5. 设置 GitHub Secrets

在 GitHub 仓库的 Settings -> Secrets -> Actions 中添加以下密钥：

1. `EXTENSION_ID`: Chrome Web Store 中的扩展 ID
2. `CLIENT_ID`: OAuth 2.0 客户端 ID
3. `CLIENT_SECRET`: OAuth 2.0 客户端密钥
4. `REFRESH_TOKEN`: 上一步获取的 refresh token

## 6. 发布新版本

1. 更新 manifest.json 中的版本号
2. 创建新的 git tag：
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

GitHub Actions 将自动：
1. 构建扩展
2. 创建 ZIP 包
3. 上传到 Chrome Web Store
4. 创建 GitHub Release

## 注意事项

1. 首次发布需要手动在 Chrome Web Store 完成：
   - 隐私政策
   - 权限说明
   - 商店图片
   - 详细描述

2. 自动发布只会更新扩展文件，不会修改商店页面信息

3. 版本号必须递增，不能重复使用相同版本号

4. 建议遵循语义化版本号规范：
   - 主版本号：不兼容的 API 修改
   - 次版本号：向下兼容的功能性新增
   - 修订号：向下兼容的问题修正 