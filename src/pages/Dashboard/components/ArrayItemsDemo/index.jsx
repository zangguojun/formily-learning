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
              <SchemaField.String
                title=""
                x-decorator="FormItem"
                x-component="PreviewText.Input"
                default="Hello world"
              />
              <SchemaField.String
                name="date"
                title="日期"
                x-decorator="FormItem"
                x-component="DatePicker.RangePicker"
                required
              />
              <SchemaField.String
                name="input"
                title="输入框"
                x-decorator="FormItem"
                x-component="Input"
                required
              />
              <SchemaField.String
                name="select"
                title="选择框"
                x-decorator="FormItem"
                x-component="Select"
                enum={[
                  { label: '选项1', value: 1 },
                  { label: '选项2', value: 2 },
                ]}
                required
              />
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
