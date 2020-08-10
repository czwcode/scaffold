### feature
- 支持ts
- 支持编写测试脚本，默认使用jest
- 通过yarn workspace 支持多package，方便生产依赖包
- 通过lerna，支持多个包的管理
- 支持生成文档，以及书写demo
- 通过prettier进行代码格式化
- 支持doc使用源码调试，和storybook文档生成
- 支持typedoc（ts文档）生成


### stories目录结构
- .storybook
  - story的配置
- src
  - 用户自定义代码
- stories
  - stories的代码，最终用于生成文档
- package.json
- tsconfig.json
### 命令解释
- start-demo
  支持快速启动demo
- doc
  支持快速生成文档
- clean
  node_modules清理
- watch
  支持依赖包的watch状态
- build
  依赖包打包
- pub
  依赖包发布