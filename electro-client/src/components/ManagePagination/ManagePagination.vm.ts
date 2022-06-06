import useAppStore from 'stores/use-app-store';
import PageConfigs from 'pages/PageConfigs';

function useManagePaginationViewModel() {
  const {
    setLoading,
    setSelection,
    listResponse,
    activePage, setActivePage,
    activePageSize, setActivePageSize,
  } = useAppStore();

  const pageSizeSelectList = PageConfigs.initialPageSizeSelectList.map((pageSize) =>
    (Number(pageSize.value) > listResponse.totalElements) ? { ...pageSize, disabled: true } : pageSize
  );

  const handlePaginationButton = (page: number) => {
    if (page !== activePage) {
      setLoading(true);
      setSelection([]);
      setActivePage(page);
    }
  };

  const handlePageSizeSelect = (size: string) => {
    const pageSize = Number(size);
    if (pageSize !== activePageSize) {
      setLoading(true);
      setSelection([]);
      setActivePage(1);
      setActivePageSize(pageSize);
    }
  };

  return {
    listResponse,
    activePage,
    activePageSize,
    pageSizeSelectList,
    handlePaginationButton,
    handlePageSizeSelect,
  };
}

export default useManagePaginationViewModel;
