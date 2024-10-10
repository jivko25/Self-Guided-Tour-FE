export const clearIndexedDB = () => {
  const deleteRequest = indexedDB.deleteDatabase("tourToEdit");

  deleteRequest.onsuccess = () => {
    console.log("IndexedDB deleted successfully.");
  };

  deleteRequest.onerror = (event) => {
    console.error("Error deleting IndexedDB:", event.target.error);
  };

  deleteRequest.onblocked = () => {
    console.warn(
      "Delete request was blocked. Make sure no other tabs are using the database."
    );
  };
};

export const checkIndexedDB = () => {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("tourToEdit", 1);

    dbRequest.onsuccess = (event) => {
      const db = event.target.result;

      // Check if the object store exists
      if (db.objectStoreNames.contains("data")) {
        const transaction = db.transaction(["data"], "readonly");
        const objectStore = transaction.objectStore("data");

        const countRequest = objectStore.count(); // Count the number of entries

        countRequest.onsuccess = () => {
          const count = countRequest.result;

          // Only proceed if there is data in the object store
          if (count > 0) {
            const getRequest = objectStore.getAll();

            getRequest.onsuccess = (event) => {
              const data = event.target.result;
              db.close();
              resolve(data.length > 0); // Returns true if IndexedDB has data
            };

            getRequest.onerror = () => {
              reject(new Error("Error retrieving data from IndexedDB"));
            };
          } else {
            db.close();
            resolve(false); // No data found in IndexedDB
          }
        };

        countRequest.onerror = () => {
          reject(new Error("Error counting entries in IndexedDB"));
        };
      } else {
        db.close();
        resolve(false); // Object store doesn't exist
      }
    };

    dbRequest.onerror = () => {
      reject(new Error("Error opening IndexedDB"));
    };
  });
};
