// quitar el .local si quieres usar la auth de modo local // admin admin
import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";


const privateRoutes = ['/protected'];

export const onRequest = defineMiddleware(async ({ url, request }, next) => {

    // console.log('ejecutado middleware');

    const authHeaders = request.headers.get('authorization') ?? '';
    // console.log("🚀 ~ onRequest ~ authHeaders:", authHeaders);


    if ( privateRoutes.includes( url.pathname )) {

        return checkLocalAuth( authHeaders, next );

    }

    return next();
});



const checkLocalAuth = ( authHeaders: string, next: MiddlewareNext ) => {

    if ( authHeaders ) {
        const authValue = authHeaders.split(' ').at(-1) ?? 'user:pass';
        const decodedValue = atob(authValue).split(':');
        const [ user, password ] = decodedValue;
        
        if ( user === 'admin' && password === 'admin') {
            return next();
        }
    }

    return new Response('Auth requerida', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic real="Secure Area"'
        }
    })
}