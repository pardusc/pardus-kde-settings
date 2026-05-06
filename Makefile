#!/usr/bin/make -f
all:
	@echo "Nothing to build, call 'make install' instead."

install:
	mkdir -pv $(DESTDIR)
	cp -a etc usr $(DESTDIR)/.

	# Wallpaper bundle: pardus-backgrounds'daki klasörü symlink yap
	mkdir -pv $(DESTDIR)/usr/share/wallpapers/Pardus/contents
	ln -sf /usr/share/backgrounds \
	       $(DESTDIR)/usr/share/wallpapers/Pardus/contents/images

	# Splash logosu: desktop-base'in sağladığı logoya symlink
	mkdir -pv $(DESTDIR)/usr/share/plasma/look-and-feel/org.pardus.desktop/contents/splash/images
	ln -sf /usr/share/desktop-base/pardus-logos/logo-text-version.svg \
	       $(DESTDIR)/usr/share/plasma/look-and-feel/org.pardus.desktop/contents/splash/images/logo.svg

	# Artık kalıntı .in dosyaları varsa temizle
	find $(DESTDIR) -type f -iname "*.in" -delete

# vim:ts=4
