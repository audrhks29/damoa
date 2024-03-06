import create from 'zustand';

interface ProjectStoreType {
  projectData: ProjectListType[];
  fetchProjectData: () => void;
}

const useProjectStore = create<ProjectStoreType>(set => ({
  projectData: [],

  fetchProjectData: async () => {
    try {

      const response = await fetch("http://localhost:3000/api/project", {
        headers: {
          Accept: "application/json",
          method: "GET"
        }
      });

      if (response) {
        const data = await response.json();
        set({ projectData: data })
      }

    } catch (err) {
      console.log(err);
    }
  }

}));

export default useProjectStore;