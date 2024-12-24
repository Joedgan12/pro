import { UserRegistrationViewModel } from './user-registration-view-model';

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new UserRegistrationViewModel();
}