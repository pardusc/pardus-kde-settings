# pardus-kde-settings

`debian/*` ve `Makefile`, `pardus-xfce-settings` ve `pardus-gnome-settings` ile benzer olacak şekilde yazıldı.

## Build

```sh
gbp buildpackage --git-ignore-new -us -uc && fakeroot debian/rules clean
```

## Eklenenler

- [x] `debian/*` + `Makefile`
- [x] `/etc/xdg/*`
- [x] Pardus Global Tema (`/usr/share/plasma/lookandfeel/org.pardus.desktop`)
    - [x] Pardus Splash
- [x] Pardus Arkaplanları (`/usr/share/wallpapers/Pardus`)

## Arkplan Resimleri

`pardus-backgrounds` paketi arkaplan resimlerini `/usr/share/backgrounds/`'a koyuyor ama KDE `/usr/share/wallpapers/`'a bakıyor. Bu yüzden `Makefile`'da symlinklemesini sağladım.
