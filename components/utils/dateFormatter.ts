import moment from "moment";
import 'moment/locale/es'

export const dateDisplaySelection = {
    complete: (date: Date) => moment(date).locale('es').calendar(null, {
        sameDay: '[Hoy]',
        nextDay: '[Hoy]',
        nextWeek: '[En el futuro]',
        lastDay: '[Ayer]',
        lastWeek: 'dddd, DD [de] MMMM',
        sameElse: 'DD [de] MMMM [de] YYYY'
    }),
    dayAndMonth: (date: Date) => moment(date).locale('es').calendar(null, {
        sameDay: '[Hoy]',
        nextDay: '[Hoy]',
        nextWeek: '[En el futuro]',
        lastDay: '[Ayer]',
        lastWeek: 'DD [de] MMMM',
        sameElse: 'DD [de] MMMM'
    })
}