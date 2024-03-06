import create from 'zustand';

interface CertificateStoreType {
  certificateData: CertificateListType[];
  fetchCertificateData: () => void;
}

const useCertificateStore = create<CertificateStoreType>(set => ({
  certificateData: [],

  fetchCertificateData: async () => {
    try {

      const response = await fetch("http://localhost:3000/api/certificate", {
        headers: {
          Accept: "application/json",
          method: "GET"
        }
      });

      if (response) {
        const data = await response.json();
        set({ certificateData: data })
      }

    } catch (err) {
      console.log(err);
    }
  }

}));

export default useCertificateStore;