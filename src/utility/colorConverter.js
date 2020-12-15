function toColor(colorName)
{
    switch(colorName){
        case "Đỏ":
            return "#ff0000";
            break;

        case "Vàng":
            return "#ffff00";
            break;

        default:
            return "#000000";
            break;
    }

}

module.exports = toColor;