/* 
Naming convention: 
1. Use PascalCase for custom components names because they will be imported as custom html elements. Ex. KgButton()
1. To avoid confusion with default html elements, it is recommended to use PascalCase
*/

function KgButton() {
  return (
    <div>
      <button>Click me</button>
    </div>
  );
}

export default KgButton;
