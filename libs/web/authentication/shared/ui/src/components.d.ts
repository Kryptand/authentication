/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface InputWithIcon {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface KryptandCenteredCard {
    }
    interface KryptandExternalLoginButton {
    }
    interface KryptandExternalLogins {
    }
    interface KryptandIntroductionCard {
    }
    interface KryptandLoginRegisterForm {
        "buttonLabel": string;
    }
    interface KryptandProductIcon {
        "theme": 'dark' | 'light';
    }
    interface KryptandTextButton {
        "type": string;
    }
    interface NavBackButton {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PopoverMenu {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PreviewUploadImage {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLInputWithIconElement extends Components.InputWithIcon, HTMLStencilElement {
    }
    var HTMLInputWithIconElement: {
        prototype: HTMLInputWithIconElement;
        new (): HTMLInputWithIconElement;
    };
    interface HTMLKryptandCenteredCardElement extends Components.KryptandCenteredCard, HTMLStencilElement {
    }
    var HTMLKryptandCenteredCardElement: {
        prototype: HTMLKryptandCenteredCardElement;
        new (): HTMLKryptandCenteredCardElement;
    };
    interface HTMLKryptandExternalLoginButtonElement extends Components.KryptandExternalLoginButton, HTMLStencilElement {
    }
    var HTMLKryptandExternalLoginButtonElement: {
        prototype: HTMLKryptandExternalLoginButtonElement;
        new (): HTMLKryptandExternalLoginButtonElement;
    };
    interface HTMLKryptandExternalLoginsElement extends Components.KryptandExternalLogins, HTMLStencilElement {
    }
    var HTMLKryptandExternalLoginsElement: {
        prototype: HTMLKryptandExternalLoginsElement;
        new (): HTMLKryptandExternalLoginsElement;
    };
    interface HTMLKryptandIntroductionCardElement extends Components.KryptandIntroductionCard, HTMLStencilElement {
    }
    var HTMLKryptandIntroductionCardElement: {
        prototype: HTMLKryptandIntroductionCardElement;
        new (): HTMLKryptandIntroductionCardElement;
    };
    interface HTMLKryptandLoginRegisterFormElement extends Components.KryptandLoginRegisterForm, HTMLStencilElement {
    }
    var HTMLKryptandLoginRegisterFormElement: {
        prototype: HTMLKryptandLoginRegisterFormElement;
        new (): HTMLKryptandLoginRegisterFormElement;
    };
    interface HTMLKryptandProductIconElement extends Components.KryptandProductIcon, HTMLStencilElement {
    }
    var HTMLKryptandProductIconElement: {
        prototype: HTMLKryptandProductIconElement;
        new (): HTMLKryptandProductIconElement;
    };
    interface HTMLKryptandTextButtonElement extends Components.KryptandTextButton, HTMLStencilElement {
    }
    var HTMLKryptandTextButtonElement: {
        prototype: HTMLKryptandTextButtonElement;
        new (): HTMLKryptandTextButtonElement;
    };
    interface HTMLNavBackButtonElement extends Components.NavBackButton, HTMLStencilElement {
    }
    var HTMLNavBackButtonElement: {
        prototype: HTMLNavBackButtonElement;
        new (): HTMLNavBackButtonElement;
    };
    interface HTMLPopoverMenuElement extends Components.PopoverMenu, HTMLStencilElement {
    }
    var HTMLPopoverMenuElement: {
        prototype: HTMLPopoverMenuElement;
        new (): HTMLPopoverMenuElement;
    };
    interface HTMLPreviewUploadImageElement extends Components.PreviewUploadImage, HTMLStencilElement {
    }
    var HTMLPreviewUploadImageElement: {
        prototype: HTMLPreviewUploadImageElement;
        new (): HTMLPreviewUploadImageElement;
    };
    interface HTMLElementTagNameMap {
        "input-with-icon": HTMLInputWithIconElement;
        "kryptand-centered-card": HTMLKryptandCenteredCardElement;
        "kryptand-external-login-button": HTMLKryptandExternalLoginButtonElement;
        "kryptand-external-logins": HTMLKryptandExternalLoginsElement;
        "kryptand-introduction-card": HTMLKryptandIntroductionCardElement;
        "kryptand-login-register-form": HTMLKryptandLoginRegisterFormElement;
        "kryptand-product-icon": HTMLKryptandProductIconElement;
        "kryptand-text-button": HTMLKryptandTextButtonElement;
        "nav-back-button": HTMLNavBackButtonElement;
        "popover-menu": HTMLPopoverMenuElement;
        "preview-upload-image": HTMLPreviewUploadImageElement;
    }
}
declare namespace LocalJSX {
    interface InputWithIcon {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface KryptandCenteredCard {
    }
    interface KryptandExternalLoginButton {
    }
    interface KryptandExternalLogins {
        "onFacebookButtonClicked"?: (event: CustomEvent<any>) => void;
        "onGithubButtonClicked"?: (event: CustomEvent<any>) => void;
        "onGoogleButtonClicked"?: (event: CustomEvent<any>) => void;
        "onTwitterButtonClicked"?: (event: CustomEvent<any>) => void;
    }
    interface KryptandIntroductionCard {
    }
    interface KryptandLoginRegisterForm {
        "buttonLabel"?: string;
        "onFormSubmit"?: (event: CustomEvent<{ email: string; password: string }>) => void;
    }
    interface KryptandProductIcon {
        "theme"?: 'dark' | 'light';
    }
    interface KryptandTextButton {
        "type"?: string;
    }
    interface NavBackButton {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PopoverMenu {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PreviewUploadImage {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "input-with-icon": InputWithIcon;
        "kryptand-centered-card": KryptandCenteredCard;
        "kryptand-external-login-button": KryptandExternalLoginButton;
        "kryptand-external-logins": KryptandExternalLogins;
        "kryptand-introduction-card": KryptandIntroductionCard;
        "kryptand-login-register-form": KryptandLoginRegisterForm;
        "kryptand-product-icon": KryptandProductIcon;
        "kryptand-text-button": KryptandTextButton;
        "nav-back-button": NavBackButton;
        "popover-menu": PopoverMenu;
        "preview-upload-image": PreviewUploadImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "input-with-icon": LocalJSX.InputWithIcon & JSXBase.HTMLAttributes<HTMLInputWithIconElement>;
            "kryptand-centered-card": LocalJSX.KryptandCenteredCard & JSXBase.HTMLAttributes<HTMLKryptandCenteredCardElement>;
            "kryptand-external-login-button": LocalJSX.KryptandExternalLoginButton & JSXBase.HTMLAttributes<HTMLKryptandExternalLoginButtonElement>;
            "kryptand-external-logins": LocalJSX.KryptandExternalLogins & JSXBase.HTMLAttributes<HTMLKryptandExternalLoginsElement>;
            "kryptand-introduction-card": LocalJSX.KryptandIntroductionCard & JSXBase.HTMLAttributes<HTMLKryptandIntroductionCardElement>;
            "kryptand-login-register-form": LocalJSX.KryptandLoginRegisterForm & JSXBase.HTMLAttributes<HTMLKryptandLoginRegisterFormElement>;
            "kryptand-product-icon": LocalJSX.KryptandProductIcon & JSXBase.HTMLAttributes<HTMLKryptandProductIconElement>;
            "kryptand-text-button": LocalJSX.KryptandTextButton & JSXBase.HTMLAttributes<HTMLKryptandTextButtonElement>;
            "nav-back-button": LocalJSX.NavBackButton & JSXBase.HTMLAttributes<HTMLNavBackButtonElement>;
            "popover-menu": LocalJSX.PopoverMenu & JSXBase.HTMLAttributes<HTMLPopoverMenuElement>;
            "preview-upload-image": LocalJSX.PreviewUploadImage & JSXBase.HTMLAttributes<HTMLPreviewUploadImageElement>;
        }
    }
}
