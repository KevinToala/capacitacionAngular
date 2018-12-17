interface Factura {
    numero: string;
    total: number;
    anulado: boolean;
}

let facturas: Factura[] = [
    {
        numero: '001-001-001',
        total: 10,
        anulado: false
    },
    {
        numero: '001-001-002',
        total: 5.50,
        anulado: false
    },
    {
        numero: '001-001-002',
        total: 1.20,
        anulado: true
    }
];