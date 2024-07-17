export async function GetProducts(route: string) {
    try {
      const response = await fetch(`http://localhost:3333${route}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  }
  