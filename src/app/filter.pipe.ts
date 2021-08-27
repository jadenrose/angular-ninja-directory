import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(ninjas: any, term: any): any {
        if (!term) return ninjas

        return ninjas.filter((ninja: any) =>
            ninja.name.toLowerCase().includes(term.toLowerCase())
        )
    }
}
