// Главный поток плагина
pixso.showUI(__html__, { width: 240, height: 120 });

pixso.ui.onmessage = (msg) => {
  if (msg.type === "hello") {
    pixso.notify("Hallo world!");
  }
};