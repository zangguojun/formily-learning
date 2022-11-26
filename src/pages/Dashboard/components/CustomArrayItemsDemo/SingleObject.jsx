
function SingleObject(props) {
  const { SchemaField, templateStr = '<%- aaa %><%- bbb %>1213', value, onChange } = props;
  const rst = templateStr.split(/(<%- .*? %>)/).map((item) => {
    switch (item) {
      case '<%- aaa %>':
        return (
          <SchemaField.String
            name="aaa"
            title="日期"
            x-decorator="FormItem"
            x-component="DatePicker.RangePicker"
            required
          />
        );

      case '<%- bbb %>':
        return (
          <SchemaField.String
            name="bbb"
            title="日期"
            x-decorator="FormItem"
            x-component="DatePicker.RangePicker"
            required
          />
        );

      default:
        return '';
    }
  });
  console.log('🚀~ 32 SingleObject rst', rst);
  return (
    <>
      <SchemaField.String
        name="aaa"
        title="日期"
        x-decorator="FormItem"
        x-component="DatePicker.RangePicker"
        required
      />
      {
        templateStr.split(/(<%- .*? %>)/).map((item) => {
          switch (item) {
            case '<%- aaa %>':
              return (
                <SchemaField.String
                  name="aaa"
                  title="日期"
                  x-decorator="FormItem"
                  x-component="DatePicker.RangePicker"
                  required
                />
              );

            case '<%- bbb %>':
              return (
                <SchemaField.String
                  name="bbb"
                  title="日期"
                  x-decorator="FormItem"
                  x-component="DatePicker.RangePicker"
                  required
                />
              );

            default:
              return item;
          }
        })
      }
    </>
  );
}

export default SingleObject;

