
export const brandOptions = []
const brands = ['Aprillia', 'Bajaj', 'Benelli', 'BMW', 'Buell', 'Ducati', 'Gilera', 'Guzzi', 'Harley Davidson', 'Honda', 'Hyosung', 'Kawasaki', 'Keeway', 'KTM', 'Kymco', 'Piaggio', 'Suzuki', 'Triumph', 'Vespa', 'Yamaha']
for (let i = 0; i < brands.length; i++) {
    brandOptions[i] = {
        value: brands[i],
        label: brands[i]
    }
}

export const yearOptions = []
const op = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
const years = op.reverse()
for (let i = 0; i < years.length; i++) {
    yearOptions[i] = {
        value: years[i],
        label: years[i]
    }
}

export const categoryOptions = [
    {
        value: 'Scooter',
        label: 'Scooter',
    },
    {
        value: 'Urban',
        label: 'Urban',
    },
    {
        value: 'Cross & Motard',
        label: 'Cross & Motard',
    },
    {
        value: 'Sport Touring',
        label: 'Sport Touring',
    },
    {
        value: 'Adventure',
        label: 'Adventure',
    },
    {
        value: 'Hyper Naked',
        label: 'Hyper Naked',
    },
    {
        value: 'Sport Heritage',
        label: 'Sport Heritage',
    },
    {
        value: 'Super Sport',
        label: 'Super Sport',
    }
    ,
    {
        value: 'Chopper',
        label: 'Chopper',
    }
];

export const motorOptions = [
    {
        value: '125',
        label: '125',
    },
    {
        value: '250',
        label: '250',
    },
    {
        value: '300',
        label: '300',
    },
    {
        value: '400',
        label: '400',
    },
    {
        value: '500',
        label: '500',
    },
    {
        value: '600',
        label: '600',
    },
    {
        value: '650',
        label: '650',
    },
    {
        value: '700',
        label: '700',
    },
    {
        value: '800',
        label: '800',
    },
    {
        value: '900',
        label: '900',
    },
    {
        value: '1000',
        label: '1000',
    },
    {
        value: '1100',
        label: '1100',
    },
    {
        value: '1200',
        label: '1200',
    },
    {
        value: '1300',
        label: '1300',
    }
];

export const licenceOptions = [
    {
        value: 'A1',
        label: 'A1',
    },
    {
        value: 'A2',
        label: 'A2',
    },
    {
        value: 'A',
        label: 'A',
    },]