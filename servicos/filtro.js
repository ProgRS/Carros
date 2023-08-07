import { carros } from "../dados/carros";

export default function filtraCarroMarca(marca) {

    const resultado = carros.filter(
        (carro) => carro.marca === marca
    );
    
    return resultado;
}

