<h1 align="center">Whatsapp Botz Preview</h1>


<p align="center">
  <a href="https://ibb.co/QQX130c"><img src="https://i.ibb.co/TBVZ0YH/thumb.jpg" alt="Velgrynd"></a>
</p>

# AzBotz
Simple Rpg WhatsApp Bot

<a href="https://github.com/Dawnfrosty/Mike-bot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Dawnfrosty/Mike-bot?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/Dawnfrosty/Mike-bot/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/Dawnfrosty/Mike-bot?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/Dawnfrosty/Mike-bot/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/Dawnfrosty/Mike-bot?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/Dawnfrosty/Mike-bot/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/Dawnfrosty/Mike-bot?label=Contributors&color=blue&style=flat-square"></a>

## Join Group Whatsapp
[![Grup WhatsApp Bot](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=oldgreen)](https://chat.whatsapp.com/E7R8oYD1AiKFVTk83Qc0sd)
[![Wangsaff BOT Katalog](https://img.shields.io/badge/Wangsaff%20BOT-25D366?style=for-the-badge&logo=whatsapp&logoColor=oldgreen)](https://wa.me/p/4860977960686069/6289688069444)
## Deploy to heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/devbotmail/Test)

| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[copy this link](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git)  |
| **IMAGEMAGICK** |[copy this link](https://github.com/DuckyTeam/heroku-buildpack-imagemagick)  |

Tutorial YouTube

[![YouTube](https://img.shields.io/badge/YouTube-Video-red)](https://youtu.be/DzNIL45qHaM)

## FOR TERMUX
install required packages
```bash
$ pkg update && pkg upgrade
$ pkg install bash
$ pkg install wget
$ pkg install git -y 
$ pkg install nodejs -y 
$ apt install ffmpeg -y
$ apt install imagemagick -y
$ pkg install libwebp
$ git clone https://github.com/devbotmail/Test
$ termux setup-storage
$ cd Test
```

#### Menginstall modules
```bash
$ npm install
$ npm update
```

If npm install failed, try using yarn instead of npm
```sh
$ pkg install yarn -y
$ yarn install
```

#### Running bot
```bash
node .
```

2. Wait for bot starting...
3. Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Join `Multi Device Beta` > Click on `link device`)
4. Now your bot is ready to rock n roll.
---------

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & GAMES-WABOT ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/BochilGaming/games-wabot -b multi-device
cd games-wabot
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP
#### Download & install this programs
| Programs | LINK |
|-----|--------|
|**Git** | [Click this](https://git-scm.com/downloads)
|**NodeJs** | [Click this](https://nodejs.org/en/download)
|**Ffmpeg** | [Click this](https://ffmpeg.org/download.html)
|**ImageMagick** | [Click this](https://imagemagick.org/script/download.php)

#### Installing the FFmpeg and Add FFmpeg to PATH enviroment variables
* Download one of the FFmpeg versions [here](https://ffmpeg.org/download.html).
* Extract file to `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run the following command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
If successful, it will give you a message like:
`SUCCESS: specified value was saved`.

* To verify that it works by running this command to see the version:
```cmd
> ffmpeg -version
```

### Download bot and module files
```bash
git clone https://github.com/devbotmail/Test
cd Test
$ npm install
$ npm update
```

If npm install failed, try using yarn instead of npm
```sh
$ npm install -g yarn
$ yarn
$ yarn install
```

### Start
```bash
node .
```

---------

## How To Customise Message Display
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', 'https://github.com/BochilGaming', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
---------

### want to contribute?
1. fork this repository
2. Change/edit/create what you want. for example you can add features, fix bug, etc
3. **test** before making a pull req!!
4. make a pull req!
5. if your pull req is already in **acc/merge**, you can delete your branch or you can create pull req again :)

---------
## ❗ Warning
WhatsApp bot is still in the development stage, so there are a few bugs
WhatsApp Connection (BETA, not working perfectly)

Editing Number Owner & session name in [`config.js`](https://github.com/DikaArdnt/Hisoka-Morou/blob/master/config.js)
Get Apikey zenz on [`zenz`](https://zenzapi.xyz/dashboard)

## AzRyCb stat
![Ra Github stat](https://github-readme-stats.vercel.app/api?username=AzRyCb&theme=midnight-purple&show_icons=true) 

![Ra Github troppy](https://github-profile-trophy.vercel.app/?username=AzRyCb&theme=monokai)

## Thanks To
* [`@adiwajshing/baileys-md`](https://github.com/adiwajshing/baileys/tree/multi-device)
* [`Nurutomo`](https://github.com/Nurutomo)
* [`HyzerrMd`](https://github.com/Hyzerr/Hyzer-MD-V2)* 
* [`Bang-Lord-Offical`](https://github.com/devbotmail/Test)
* [`AzRyCb`](https://github.com/AzRyCb)

License: [MIT](https://en.wikipedia.org/wiki/MIT_License)

Support Me
* [`Paypal`](https://www.paypal.me/Cakhaho)
* [`Saweria`](https://saweria.co/AzryCb)
* [`TrakTeer`](https://trakteer.id/AzRyCb)

---------
 [![Nurutomo](https://github.com/nurutomo.png?size=100)](https://github.com/Nurutomo) | [![Hyzerr](https://github.com/Hyzerr.png?size=100)](https://github.com/Hyzerr) | [![AzRy](https://github.com/AzRyCb.png?size=100)](https://github.com/AzRyCb) | [![Arya](https://github.com/devbotmail.png?size=100)](https://github.com/devbotmail)
----|----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Hyzerr](https://github.com/Hyzerr) | [AzRy](https://github.com/AzRyCb) | [LordArya](https://github.com/devbotmail)
 Penulis / Pencipta | Penulis ulang | Owner Bot |Partner


