import {
  FormItem,
  Input,
  Editable,
  Select,
  DatePicker,
  ArrayItems,
  FormButtonGroup,
  Submit,
  Space,
  PreviewText,
} from '@formily/next';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';

const SchemaField = createSchemaField({
  components: {
    FormItem,
    DatePicker,
    Editable,
    Space,
    Input,
    Select,
    ArrayItems,
    PreviewText,
  },
});

const form = createForm();

function ArrayItemsDemo() {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="array"
          title="对象数组"
          x-decorator="FormItem"
          x-component="ArrayItems"
        >
          <SchemaField.Object>
            <SchemaField.Void x-component="Space">
              {
                '<%- input %><%- select %>1213<%- DatePicker.RangePicker %>'.split(/(<%- .*? %>)/).map((item) => {
                  switch (item) {
                    case '<%- input %>':
                      return (
                        <SchemaField.String
                          name="input"
                          title=""
                          x-decorator="FormItem"
                          x-component="Input"
                          required
                        />
                      );

                    case '<%- select %>':
                      return (
                        <SchemaField.String
                          name="select"
                          title=""
                          x-decorator="FormItem"
                          x-component="Select"
                          enum={[1, 2]}
                          required
                        />
                      );

                    case '<%- DatePicker.RangePicker %>':
                      return (
                        <SchemaField.String
                          name="date"
                          title=""
                          x-decorator="FormItem"
                          x-component="DatePicker.RangePicker"
                          required
                        />
                      );

                    default:
                      return (
                        <SchemaField.String
                          title=""
                          x-decorator="FormItem"
                          x-component="PreviewText.Input"
                          x-component-props={{
                            style: { width: '100%' },
                          }}
                          default={item}
                        />
                      );
                  }
                })
              }
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.Copy"
              />
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.Remove"
              />
            </SchemaField.Void>
          </SchemaField.Object>
          <SchemaField.Void
            x-component="ArrayItems.Addition"
            title="添加条目"
          />
        </SchemaField.Array>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
}

export default ArrayItemsDemo;
