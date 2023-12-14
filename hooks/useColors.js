import { useState, useEffect } from "react";

/* eslint-disable react-hooks/exhaustive-deps */

export const useColors = () => {
  const [colors, setColors] = useState({
    //lightswitch
    darkmode: false,

    //Connected to colorPicker
    light: {
      pc: { r: 10, g: 120, b: 140, a: 1 },
      sc: { r: 255, g: 128, b: 128, a: 1 },
      bg: { r: 250, g: 250, b: 250, a: 1 },
      success: { r: 0, g: 255, b: 0, a: 1 },
      warning: { r: 255, g: 255, b: 0, a: 1 },
      alert: { r: 255, g: 0, b: 0, a: 1 },
    },
    dark: {
      pc: { r: 180, g: 220, b: 220, a: 1 },
      sc: { r: 255, g: 128, b: 128, a: 1 },
      bg: { r: 10, g: 30, b: 50, a: 1 },
      success: { r: 0, g: 255, b: 0, a: 1 },
      warning: { r: 255, g: 255, b: 0, a: 1 },
      alert: { r: 255, g: 100, b: 100, a: 1 },
    },

    //compiled strings
    pc: ``,
    sc: "",
    bg: "",
    success: ``,
    warning: ``,
    alert: ``,
  });

  useEffect(() => {
    let newPc = colors.darkmode
      ? `${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}`
      : `${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}`;

    let newSc = colors.darkmode
      ? `${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}`
      : `${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}`;

    let newBg = colors.darkmode
      ? `${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}`
      : `${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}`;

    let success = colors.darkmode
      ? `${colors.dark.success.r}, ${colors.dark.success.g}, ${colors.dark.success.b}`
      : `${colors.light.success.r}, ${colors.light.success.g}, ${colors.light.success.b}`;
    let warning = colors.darkmode
      ? `${colors.dark.warning.r}, ${colors.dark.warning.g}, ${colors.dark.warning.b}`
      : `${colors.light.warning.r}, ${colors.light.warning.g}, ${colors.light.warning.b}`;
    let alert = colors.darkmode
      ? `${colors.dark.alert.r}, ${colors.dark.alert.g}, ${colors.dark.alert.b}`
      : `${colors.light.alert.r}, ${colors.light.alert.g}, ${colors.light.alert.b}`;

    setColors({
      ...colors,
      pc: newPc,
      sc: newSc,
      bg: newBg,
      success: success,
      warning: warning,
      alert: alert,
    });
  }, [colors.light, colors.dark, colors.darkmode]);

  return { colors: colors, setColors: setColors };
};
