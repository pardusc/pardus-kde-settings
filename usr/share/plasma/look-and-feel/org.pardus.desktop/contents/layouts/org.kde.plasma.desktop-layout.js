loadTemplate("org.kde.plasma.desktop.defaultPanel")

var widgets = panelById(panelIds[0]).widgets();

for (var i = 0; i < widgets.length; i++) {
    var w = widgets[i];

    if (w.type === "org.kde.plasma.kickoff" ||
        w.type === "org.kde.plasma.kicker" ||
        w.type === "org.kde.plasma.simplemenu") {

        w.currentConfigGroup = ["General"];
        w.writeConfig("icon", "emblem-pardus-symbolic");
    }

    if (w.type === "org.kde.plasma.taskmanager" ||
        w.type === "org.kde.plasma.icontasks") {

        w.currentConfigGroup = ["General"];
        w.writeConfig("launchers", [
        "applications:systemsettings.desktop",
        "applications:tr.org.pardus.software.desktop",
        "preferred://filemanager",
        "preferred://browser"
        ]);
    }
}

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
