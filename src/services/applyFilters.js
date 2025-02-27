export const applyFilters = (trucks, filtersData) => {
  return trucks.filter((truck) => {
    if (
      filtersData.location &&
      !truck.location.toLowerCase().includes(filtersData.location.toLowerCase())
    ) {
      return false;
    }

    if (
      (filtersData.transmission &&
        truck.transmission.toLowerCase() !==
          filtersData.transmission.toLowerCase()) ||
      (filtersData.Automatic &&
        truck.transmission.toLowerCase() !== "automatic")
    ) {
      return false;
    }

    if (
      (filtersData.engine &&
        truck.engine.toLowerCase() !== filtersData.engine.toLowerCase()) ||
      (filtersData.Petrol && truck.engine.toLowerCase() !== "petrol")
    ) {
      return false;
    }

    if (filtersData.AC && !truck.AC) return false;
    if (filtersData.bathroom && !truck.bathroom) return false;
    if (filtersData.kitchen && !truck.kitchen) return false;
    if (filtersData.TV && !truck.TV) return false;
    if (filtersData.radio && !truck.radio) return false;
    if (filtersData.refrigerator && !truck.refrigerator) return false;
    if (filtersData.microwave && !truck.microwave) return false;
    if (filtersData.gas && !truck.gas) return false;
    if (filtersData.water && !truck.water) return false;
    //  ================== Filter form type ==================
    const typeMapping = {
      Van: "panelTruck",
      "Fully Integrated": "fullyIntegrated",
      Alcove: "alcove",
    };

    const selectedTypes = Object.entries(filtersData)
      .filter(([key, value]) => value && typeMapping[key])
      .map(([key]) => typeMapping[key].toLowerCase());

    if (
      selectedTypes.length > 0 &&
      !selectedTypes.includes(truck.form.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
};
