import { inject } from '@angular/core'
import { Router } from '@angular/router';

export const loginPguard = () => {
    
    const router = inject(Router)

    if (localStorage.getItem("Token")) {
        return true;
    } else {
        router.navigate(["/login"])
        return false;
    }
};
