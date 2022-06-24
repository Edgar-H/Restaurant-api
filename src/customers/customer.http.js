const { toPromise } = require('../utils/toPromise');
const customersControllers = require('./customer.controllers');

const getMyAddressData = async (req, res) => {
    const id = req.params.uuid;
    const [users, error] = await toPromise(
        customersControllers.getUserByAdress(id)
    );
    if (error || !users) {
        res.status(400).json({ message: 'Try with another identification' });
    }
    res.status(200).json(users);
};

const getAllAddresses = async (req, res) => {
    const [address, error] = await toPromise(customersControllers.getAllAddresses())
     if (error || !address) {
         res.status(400).json({ message: 'Try with another address' });
     }
     res.status(200).json({ address, message: 'all good' });
}

const getAddressById = async (req, res) => {
    console.log(req);
    const id = req.params.uuid;
    const [address, error] = await toPromise(
        customersControllers.getAddressById(id)
    );
    if (error || !address) {
        res.status(400).json({ message: 'Try with another address' });
    }
    res.status(200).json({ address, message: 'all good' });
};

const postNewDetail = async (req, res) => {
    const [address, error] = await toPromise(
        customersControllers.registerCustomerDetails()
    );
    if (error || !address) {
        res.status(400).json({ message: 'Try with another address' });
    }
    res.status(200).json({ address, message: 'all good' });
}

const putNewDetail = async (req, res) => {
    const id = req.params.uuid;
    const [address, error] = await toPromise(
        customersControllers.editCustomerDetails(id)
    );
    if (error || !address) {
        res.status(400).json({ message: 'Try with another address' });
    }
    res.status(200).json({ address, message: 'all good' });
};

const postNewAddress = async (req, res) => {
    const [address, error] = await toPromise(
        customersControllers.registerCustomerAddress()
    );
    if (error || !address) {
        res.status(400).json({ message: 'Try with another address' });
    }
    res.status(200).json({ address, message: 'all good' });
};

const putNewAddress = async (req, res) => {
    const id = req.params.uuid;
    const [address, error] = await toPromise(
        customersControllers.editCustomerAddress(id)
    );
    if (error || !address) {
        res.status(400).json({ message: 'Try with another address' });
    }
    res.status(200).json({ address, message: 'all good' });
};

const deleteAddress = async (req, res) => {
    const id = req.params.uuid;
    const [address, error] = await toPromise(
        customersControllers.deleteCustomerAddress(id)
    );
    if (error || !address) {
        res.status(400).json({ message: 'Try with another address' });
    }
    res.status(204).json();
};

module.exports = {
    getAddressById,
    getMyAddressData,
    getAllAddresses,
    postNewDetail,
    putNewDetail,
    postNewAddress,
    putNewAddress,
    deleteAddress
}