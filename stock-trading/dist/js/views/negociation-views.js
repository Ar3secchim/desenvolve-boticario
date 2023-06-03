import { View } from "./view.js";
export class NegociationsView extends View {
    template(model) {
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
                <td>${this.formate(item.data)}</td>
                <td>${item.amount}</td>
                <td>${item.value}</td>
              </tr>
              `;
        }).join('')}
          </tbody>
        </thead>
      </table>
    `;
    }
    formate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
