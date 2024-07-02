const ApiSet = ({ saveApi, apiKey, handleChange }) => {
  return (
    <form onSubmit={saveApi}>
      <input id="apiKey" name="api" placeholder="API Key" />
      <input id="latitude" name="latitude" placeholder="Latitude" />
      <input id="longitude" name="longitude" placeholder="Longitude" />
      <input type="submit" value="Save" />
    </form>
  );
}

export default ApiSet;