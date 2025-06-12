import { inject } from '@angular/core'
import { Router } from '@angular/router';

export const login = () => {
    
    const router = inject(Router)

    if ((localStorage.getItem("Tokens")) || (localStorage.getItem("Token"))) {
        return false;
    } else {
        return true;
    }
};