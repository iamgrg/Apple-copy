// Rajouter un titre et une fonction pour modifier les propriétés et les photos

const newMac = (Size, Model, Capacity, Color) => {
    let Title = `${Size} Macbook ${Model} ${Color}`;
    let mac = {
        Title,
        Type : "Mac",
        Size, 
        Model,
        Capacity,
        Color,
        Price : undefined,
    }
    if(Model === "Air"){
        if(Capacity === "256GB"){
            mac.Price = 999;
        }
        if(Capacity === "512GB"){
            mac.Price = 1249;
        }
        else if(Capacity !== "256GB" && Capacity !=="512GB"){
            console.error("Wrong Capicity input in newMac, capicity :", Capacity)
            return null;
        }
    }
    if(Model === "ProS"){
        if(Capacity === "256GB"){
            mac.Price = 1299;
        }
        if(Capacity === "512GB"){
            mac.Price = 1499;
        }
        else{
            console.error("Wrong Capicity input in newMac")
            return null;
        }
    }
    if(Model === "ProL"){
        if(Capacity === "8core"){
            mac.Price = 1999;
        }
        if(Capacity === "10Core"){
            mac.Price = 2499;
        }
        else{
            console.error("Wrong Capicity input in newMac");
            return null;
        }
    }
    else if(Model !== "Air" && Model !=="ProS" && Model !=="ProL"){
        console.error("Wrong Model input in newMac")
        return null;
    }
    return mac
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////




const newIpad = (Model, Size, Capacity, Color) => {
    let Title = `${Size} iPad ${Model} ${Capacity} ${Color}`;
    let Ipad = {
        Title : Title,
        Type : "Ipad", 
        Model,
        Size,
        Capacity,
        Color,
        Price : undefined,
    }
    if(Model === "Pro"){
            if(Capacity === "126GB"){
                Ipad.Price = 799;
            }
            else if(Capacity === "256GB"){
                Ipad.Price = 899;
            }
            else if(Capacity === "512GB"){
                Ipad.Price = 1099;
            }
            else if(Capacity === "1TB"){
                Ipad.Price = 1499;
            }
            else if(Capacity === "2TB"){
                Ipad.Price = 1899;
            }
            if(Size === "12.9-inch"){
                Ipad.Price = Ipad.Price + 300;
            }
        }
    if(Model === "Air"){
        if(Capacity === 64){
            Ipad.Price = 599;
        }
        else if(Capacity === "256GB"){
            Ipad.Price = 749;
        }
    }
    else if(Model !== "Air" && Model !=="Pro"){
        console.error("Wrong Model input in newIpad")
        return null;
    }
    return Ipad
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


const newIphone = (Model, Size, Capacity, Color) => {
    let Title = `$iPhone 13 ${Model} ${Size} ${Capacity} ${Color}`;
    let Iphone = {
        Title : Title,
        Type : "Iphone", 
        Model,
        Size,
        Capacity,
        Color,
        Price : undefined,
    }
    if(Model === "Default"){
        Iphone.Title = `iPhone 13 ${Size} ${Capacity} ${Color}`;
        if(Capacity === "128GB"){
            Iphone.Price = 829;
        }
        else if(Capacity === "256GB"){
            Iphone.Price = 929;
        }
        else if(Capacity === "512GB"){
            Iphone.Price = 1129;
        }
        if(Size === "mini"){
            Iphone.Price =  Iphone.Price -100;
        }
    }
    if(Model === "Pro "){
        if(Capacity === "126GB"){
            Iphone.Price = 999;
        }
        else if(Capacity === "256GB"){
            Iphone.Price = 1099;
        }
        else if(Capacity === "512GB"){
            Iphone.Price = 1299;
        }
        else if(Capacity === "1TB"){
            Iphone.Price = 1499;
        }
        if(Size === "Max"){
            Iphone.Price =  Iphone.Price +100;
        }
    }
    else if(Model !== "Pro" && Model !=="Default"){
        console.error("Wrong Model input in newIphone")
        return null;
    }
    return Iphone;
}

export {newIpad, newMac, newIphone}
