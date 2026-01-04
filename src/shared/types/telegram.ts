// types.ts
export interface ITelegramUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
}

export interface IWebApp {
  initData: string;
  initDataUnsafe: {
    query_id: string;
    user: ITelegramUser;
    auth_date: string;
    hash: string;
  };
  version: string;
  platform: string;
  colorScheme: string;
  themeParams: {
    link_color: string;
    button_color: string;
    button_text_color: string;
    secondary_bg_color: string;
    hint_color: string;
    bg_color: string;
    text_color: string;
  };
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  isClosingConfirmationEnabled: boolean;
  headerColor: string;
  backgroundColor: string;
  BackButton?: {
    isVisible: boolean;
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
  };
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    isActive: boolean;
  };
  safeAreaInset: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  contentSafeAreaInset: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  close: () => void;
  openTelegramLink: (url: string) => void;
  openLink(url: string, params?: { try_instant_view?: boolean }): void;
  HapticFeedback: any;
  requestContact: () => Promise<string | null>
  onEvent: (eventType: string, eventHandler: (event?: any) => void) => void;
  offEvent: (eventType: string, eventHandler: (event?: any) => void) => void;
  showConfirm: (message: string, callback: (isOk: boolean) => void) => void;
  disableVerticalSwipes: () => void;
  enableVerticalSwipes: () => void;
  downloadFile: ({url, file_name}: {url: string, file_name: string}, callback: () => void) => void;
  isVersionAtLeast: (version: any) => boolean;
  isFullscreen: boolean;
  requestFullscreen: () => void;
  exitFullscreen: () => void;
}