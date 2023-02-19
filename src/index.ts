import ExpoSettingsModule from "./ExpoSettingsModule";

export function getTheme(): string {
  console.log(
    typeof ExpoSettingsModule.getTheme(),
    ExpoSettingsModule.getTheme()
  );
  return ExpoSettingsModule.getTheme();
}
