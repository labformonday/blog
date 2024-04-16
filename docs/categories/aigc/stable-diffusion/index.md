# MAC 安装 Stable Diffusion

## 学习

https://www.bilibili.com/video/BV1iZ421z7F9

## homebrew 安装

## 安装依赖插件

```bash
brew install cmake protobuf rust python@3.10 wget
```

## 克隆 webui 项目

```bash
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

## 下载模型: 以 .safetensors 或者 .ckpt 结尾

https://civitai.com/

搜索 chilloutmix
搜索 国风

下载模型并放到 `stable-diffusion-webui/Stable-diffusion` 目录下

## 启动

```bash
cd stable-diffusion-webui

./webui.sh
```

## 汉化

- 安装汉化插件 `sd-webui-bilingual-localization`
  `Bilingual Localization UI related`

  https://github.com/journey-ad/sd-webui-bilingual-localization

- 下载中文语言包

  下载: https://github.com/dtlnor/stable-diffusion-webui-localization-zh_CN

  把 `localizations/zh_CN.json` 放到 `stable-diffusion-webui/localizations` 目录下

## 常见问题

- 模型选择不了，控制台提示: 缺少工具包 openai/clip-vit-large-patch14 的问题

```bash
cd stable-diffusion-webui
mkdir openai
cd openai
git clone https://www.modelscope.cn/AI-ModelScope/clip-vit-large-patch14.git
cd .. # 回到项目根目录
./webui.sh # 再次启动
```

- 扩展插件没有数据，点击 Load from:

stable-diffusion-webui/modules/ui-extensions.py
https://ghproxy.com/https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui-extensions/master/index.json
