import linuxIcon from "./images/linux-logo.png";
import appleIcon from "./images/apple-logo.png";
import windowsIcon from "./images/windows-logo.png";

export const downloadOptions = [
  {
    id: "WINDOWS",
    display: "Windows",
    href:
      "https://github.com/CityOfZion/neon-wallet/releases/download/0.0.7/Neon.Setup.0.0.7.Windows.exe",
    icon: windowsIcon,
    size: "134.56mb (Neon.exe)"
  },
  {
    id: "MAC_OS",
    display: "Mac OS",
    href:
      "https://github.com/CityOfZion/neon-wallet/releases/download/0.0.7/Neon-0.0.7.Mac.dmg",
    icon: appleIcon,
    size: "134.56mb (Neon.dmg)"
  },
  {
    id: "LINUX",
    display: "Linux",
    href:
      "https://github.com/CityOfZion/neon-wallet/releases/download/0.0.7/Neon-0.0.7_amd64.Linux.deb",
    icon: linuxIcon,
    size: "134.56mb (Neon.deb)"
  },
  {
    id: "LINUX2",
    display: "Linux",
    href:
      "https://github.com/CityOfZion/neon-wallet/releases/download/0.0.7/Neon-0.0.7-x86_64.Linux.AppImage",
    icon: linuxIcon,
    size: "134.56mb (Neon.appimage)"
  }
];
