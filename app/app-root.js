import { Observable } from '@nativescript/core';
const frameModule = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MainViewModel();
}

class MainViewModel extends Observable {
    constructor() {
        super();
    }

    navigateToSellerLogin() {
        frameModule.topmost().navigate("app/components/seller-login/seller-login-page");
    }

    navigateToUserRegistration() {
        frameModule.topmost().navigate("app/components/user-registration/user-registration-page");
    }
}

exports.onNavigatingTo = onNavigatingTo;