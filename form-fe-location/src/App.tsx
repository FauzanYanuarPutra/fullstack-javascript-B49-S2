import React from 'react';
import { DataKota, DataProvinsi, DataKecamatan, DataKelurahan } from './api/FetchApi';
import Button from './components/elements/Button';
import { motion, AnimatePresence } from 'framer-motion'
import FormInput from './components/fragments/FormInput';
import { IconSquareRoundedX } from '@tabler/icons-react';


interface Provinsi {
  id: string;
  name: string;
}

interface Kota extends Provinsi {
  kode_provinsi: string;
}

interface Kecamatan extends Provinsi {
  kode_provinsi: string;
}

interface Kelurahan extends Provinsi {
  district: string;
}

interface State {
  dataUser: any;
  dataProvinsi: Provinsi[];
  dataKota: Kota[];
  dataKecamatan: Kecamatan[];
  dataKelurahan: Kelurahan[];
  selectedProvinsi: string;
  selectedKota: string;
  selectedKecamatan: string;
  selectedKelurahan: string;
  showInformation: boolean;
}

export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataUser: [],
      dataProvinsi: [],
      dataKota: [],
      dataKecamatan: [],
      dataKelurahan: [],
      selectedProvinsi: '',
      selectedKota: '',
      selectedKecamatan: '',
      selectedKelurahan: '',
      showInformation: false,
    };
  }

  componentDidMount() {
    this.ambilDataProvinsi();
  }

  HandleProvinsiChange = async (event: any) => {
    const selectedProvinsi = event.target.value;
    this.setState({
      selectedProvinsi,
      dataKota: [],
      selectedKota: '',
      dataKecamatan: [],
      selectedKecamatan: '',
      dataKelurahan: [],
      selectedKelurahan: '',
    });

    if (selectedProvinsi !== '') {
      this.setState({ dataKota: await DataKota(selectedProvinsi) });
    }
  };

  HandleKotaChange = async (event: any) => {
    const selectedKota = event.target.value;
    console.log('Selected Kecamatan:', selectedKota);
    this.setState({
      selectedKota,
      dataKecamatan: [],
      selectedKecamatan: '',
      dataKelurahan: [],
      selectedKelurahan: '',
    });

    if (selectedKota !== '') {
      this.setState({ dataKecamatan: await DataKecamatan(selectedKota) });
    }
  };

  HandleKecamatanChange = async (event: any) => {
    const selectedKecamatan = event.target.value;
    this.setState({
      selectedKecamatan,
      dataKelurahan: [],
      selectedKelurahan: '',
    });

    if (selectedKecamatan !== '') {
      this.setState({ dataKelurahan: await DataKelurahan(selectedKecamatan) });
    }
  };

  HandleKelurahanChange = async (event: any) => {
    const selectedKelurahan = event.target.value;
    this.setState({
      selectedKelurahan,
    });
  };

  async ambilDataProvinsi() {
    try {
      this.setState({ dataProvinsi: await DataProvinsi() });
    } catch (error) {
      console.error(error);
    }
  }

  Submit = () => {
    const provinsi = this.state.dataProvinsi.find((item) => item.id === this.state.selectedProvinsi)?.name || '';
    const kota = this.state.dataKota.find((item) => item.id === this.state.selectedKota)?.name || '';
    const kecamatan = this.state.dataKecamatan.find((item) => item.id === this.state.selectedKecamatan)?.name || '';
    const kelurahan = this.state.dataKelurahan.find((item) => item.id === this.state.selectedKelurahan)?.name || '';

    const data = {
      provinsi,
      kota,
      kecamatan,
      kelurahan,
    }

    this.setState({
      dataUser: data,
      showInformation: true,
    })

  }
  
  
  render() {
    return (
      <div>
      <AnimatePresence>
        {this.state.showInformation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4 }}
            className='fixed top-0 left-0 bottom-0 right-0 w-full bg-gray-200 z-[1000] p-5'
          >
            <div onClick={() => this.setState({ showInformation: false })} className='flex gap-3 cursor-pointer absolute text-2xl text-red-600 top-10 right-10 '><IconSquareRoundedX className='w-8 h-8' /></div>
            <div className='flex flex-col h-full items-center justify-center'>
              <div className=' flex flex-col gap-3'>
                <div><p className='text-md font-medium text-blue-700'>Provinsi : </p>{ this.state.dataUser.provinsi }</div>
                <div><p className='text-md font-medium text-blue-700'>Kota : </p>{this.state.dataUser.kota}</div>
                <div><p className='text-md font-medium text-blue-700'>Kecamatan : </p>{this.state.dataUser.kecamatan}</div>
                <div><p className='text-md font-medium text-blue-700'>Kelurahan : </p>{this.state.dataUser.kelurahan}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        <div className='w-[90%] max-w-[800px] my-14  mx-auto'>
          <div className='text-xl my-6'>
            Selamat Datang Di Task Fauzan
          </div>
          <form action="" className='flex flex-col gap-3'>
            <FormInput
              name='provinsi'
              data={this.state.dataProvinsi}
              onChange={this.HandleProvinsiChange}
            />

            {this.state.selectedProvinsi !== '' && this.state.dataKota && (
              <FormInput
                name='kota'
                data={this.state.dataKota}
                onChange={this.HandleKotaChange}
              />
            )}
            {this.state.selectedKota !== '' && this.state.dataKecamatan && (
              <FormInput
                name='kecamatan'
                data={this.state.dataKecamatan}
                onChange={this.HandleKecamatanChange} 
              />
            )}
            {this.state.selectedKecamatan !== '' && this.state.dataKelurahan && (
              <FormInput
                name='kelurahan'
                data={this.state.dataKelurahan}
                onChange={this.HandleKelurahanChange} 
              />
            )}
            <Button
              name={`${this.state.selectedKelurahan !== '' ? 'Submit' : 'Isi Dulu Form Nya !!'}`}
              type='button'
              className={`${this.state.selectedKelurahan === '' ? ' bg-gray-400 cursor-auto' : 'bg-blue-500 cursor-pointer'} p-3 rounded-lg text-white text-lg font-bold`}
              onClick={() => {
                if(this.state.selectedKelurahan !== '') {
                  this.Submit()
                }
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

