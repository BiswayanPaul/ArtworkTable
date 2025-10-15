import { useEffect, useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

interface Artwork {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string;
  date_start: number;
  date_end: number;
}

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Artwork[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectCount, setSelectCount] = useState<number>(0);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const rowsPerPage = 12;

  const fetchData = async (pageNumber: number): Promise<Artwork[]> => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BASE_FETCH_URL + `?page=${pageNumber}`
      );
      const data = await response.json();
      if (pageNumber === page) {
        setData(data.data);
        setTotalRecords(data.pagination.total);
      }
      return data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const onPageChange = (e: { page: number }) => {
    const newPage = e.page + 1;
    setPage(newPage);
  };

  const handleSelectRows = async () => {
    if (selectCount <= 0) {
      alert("Enter a valid number");
      return;
    }

    let collectedRows: Artwork[] = [];
    let currentPage = 1;

    while (
      collectedRows.length < selectCount &&
      (currentPage - 1) * rowsPerPage < totalRecords
    ) {
      const pageData = await fetchData(currentPage);
      collectedRows = [...collectedRows, ...pageData];
      currentPage++;
    }

    const finalSelection = collectedRows.slice(0, selectCount);
    setSelectedRows(finalSelection);

    // If current visible page isn't part of selection, show the last page loaded
    const targetPage = Math.ceil(finalSelection.length / rowsPerPage);
    if (targetPage !== page) setPage(targetPage);

    setShowPopup(false);
    setSelectCount(0);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectionHeader = (
    <div className="flex items-center gap-2 relative">
      <i
        className="pi pi-angle-down cursor-pointer"
        onClick={() => setShowPopup((prev) => !prev)}
      ></i>

      {showPopup && (
        <div
          ref={popupRef}
          className="absolute z-10 bg-white border rounded-lg shadow-lg p-3 top-6 left-0 w-48"
        >
          <p className="text-sm mb-2 font-medium">Select N rows</p>
          <input
            type="number"
            className="w-full border p-1 rounded mb-2"
            value={selectCount}
            onChange={(e) => setSelectCount(Number(e.target.value))}
            placeholder="Enter number"
          />
          <Button
            label="Select"
            className="w-full p-1"
            onClick={handleSelectRows}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4">
      <h2 className="mb-3 text-xl font-semibold">Art Institute of Chicago</h2>

      <DataTable
        value={data}
        selection={selectedRows}
        onSelectionChange={(e) => setSelectedRows(e.value as Artwork[])}
        dataKey="id"
        paginator={false}
        selectionMode="checkbox"
      >
        <Column
          selectionMode="multiple"
          header={selectionHeader}
          headerStyle={{ width: "4rem" }}
        ></Column>
        <Column field="title" header="Title" sortable></Column>
        <Column field="place_of_origin" header="Origin"></Column>
        <Column field="artist_display" header="Artist"></Column>
        <Column field="inscriptions" header="Inscriptions"></Column>
        <Column field="date_start" header="Start"></Column>
        <Column field="date_end" header="End"></Column>
      </DataTable>

      <div className="mt-3">
        <Paginator
          first={(page - 1) * rowsPerPage}
          rows={rowsPerPage}
          totalRecords={totalRecords}
          onPageChange={onPageChange}
        />
      </div>

      <div className="mt-4 border p-3 rounded">
        <h3 className="font-medium mb-2">
          Selected Rows ({selectedRows.length})
        </h3>
        {selectedRows.length > 0 ? (
          <ul className="list-disc ml-6">
            {selectedRows.map((row) => (
              <li key={row.id}>{row.title}</li>
            ))}
          </ul>
        ) : (
          <p>No rows selected yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
