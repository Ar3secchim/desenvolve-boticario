import { View } from "./view.js";
export class MessageViews extends View {
    template(model) {
        return `
      <p class ="alert alert-info">${model} </p>
    `;
    }
}
//# sourceMappingURL=menssade-views.js.map