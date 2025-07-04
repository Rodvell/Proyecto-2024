import { inject } from '@angular/core'
import { Router } from '@angular/router';

export const loginEguard = () => {
    
    const router = inject(Router)

    if (localStorage.getItem("Tokens")) {
        return true;
    } else {
        router.navigate(["/login"])
        return false;
    }
};