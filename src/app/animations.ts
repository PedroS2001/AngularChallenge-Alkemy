import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [
    transition('HomePage => DetallePage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ top: '-100vh' })
        ]),
        group([
            query(':leave', [
                animate('500ms ease-out', style({ top: '100vh' }))
            ]),
            query(':enter', [
                animate('500ms ease-out', style({ top: '0' }))
            ])
        ]),
        query(':enter', animateChild()),
        query(':leave', animateChild()),
    ]),
    transition('DetallePage => HomePage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ top: '100vh' })
        ]),
        group([
            query(':leave', [
                animate('500ms ease-out', style({ top: '-100vh' }))
            ]),
            query(':enter', [
                animate('500ms ease-out', style({ top: '0' }))
            ])
        ]),
        query(':enter', animateChild()),
        query(':leave', animateChild()),
    ]),
    transition('LoginPage => HomePage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: '100%',
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ opacity: '0%' })
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate('700ms ease-out', style({ opacity: '0%' }))
            ]),
            query(':enter', [
                animate('900ms ease-out', style({ opacity: '100%' }))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
    transition('BuscadorPage => HomePage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('500ms ease-out', style({ left: '100%' }))
            ]),
            query(':enter', [
                animate('500ms ease-out', style({ left: '0%' }))
            ])
        ]),
        query(':leave', animateChild()),
        query(':enter', animateChild()),
    ]),
    transition('* => BuscadorPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '100%' })
        ]),
        group([
            query(':leave', [
                animate('500ms ease-out', style({ left: '-100%' }))
            ]),
            query(':enter', [
                animate('500ms ease-out', style({ left: '0%' }))
            ])
        ]),
        query(':leave', animateChild()),
        query(':enter', animateChild()),
    ])

])