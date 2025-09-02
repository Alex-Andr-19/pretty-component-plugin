/// <reference types="@figma/plugin-typings" />

// Главный поток плагина
figma.showUI(__html__, {
  width: 240,
  height: 120,
  // @ts-ignore
  // appendTo: "RIGHT_PANEL"
});
// figma.showUI(__html__, { width: 240, height: 120, appendTo?: "DIALOG" | "RIGHT_PANEL"; });

figma.ui.onmessage = async (msg) => {
  if (msg.type === "hello") {
    figma.notify("Hello from Figma");
  }

  if (msg.type === "update-all") {
    // пример обхода и обновления помеченных нод
    const nodes = figma.root.findAll(n => n.getPluginData("pc:tracked") === "1");
    for (const n of nodes) {
      // твоя логика обновления компонента/инстанса
      // пример: проставить авто-layout параметры
      if ("layoutGrow" in n) (n as LayoutMixin).layoutGrow = 1;
    }
    figma.notify(`Updated: ${nodes.length}`);
  }

  if (msg.type === "close") figma.closePlugin();
};

