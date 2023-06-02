import { Negotiations } from "../models/negotiations.js"
import { View } from "./view.js"

export class NegociationsView extends View<Negotiations>{

  protected template(model: Negotiations): string{
    return `
      <table class="table text-center text-light" table-hover table-bordered>
        <thead>
          <tr>
            <th>DATE</th>
            <th>AMOUT</th>
            <th>VALUE</th>
          </tr>
          <tbody>
            ${model.list().map(item => {
              return `
              <tr>
              //format date
                <td>${this.formate(item.data)}</td>
                <td>${item.amount}</td>
                <td>${item.value}</td>
              </tr>
              `
            }).join('')}
          </tbody>
        </thead>
      </table>
    `
  }

  private formate (date: Date): string{
    return new Intl.DateTimeFormat().format(date) 
  }

}