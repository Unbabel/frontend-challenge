/**
 * Icon Dictionary composable.
 * When importing assets, Vite will return the resolved public URL.
 */
import AddRowIconUrl from "@/assets/icons/add-row.svg";
import DeleteIconUrl from "@/assets/icons/delete.svg";
import PersonIconUrl from "@/assets/icons/person.svg";
import FetchDocumentIconUrl from "@/assets/icons/fetch-document.svg";
import UploadIconUrl from "@/assets/icons/upload.svg";

/**
 * Mapper for name input and icon to display. Maybe it would be better to be a JSON config
 */
const iconUrlMapper = {
  ["add-row"]: AddRowIconUrl,
  ["delete"]: DeleteIconUrl,
  ["person"]: PersonIconUrl,
  ["fetch-document"]: FetchDocumentIconUrl,
  ["upload"]: UploadIconUrl,
};

export function useIconDictionary() {
  const getIconUrlFromName = (iconName) => {
    return iconUrlMapper[iconName];
  };

  return {
    getIconUrlFromName,
  };
}
