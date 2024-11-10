"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MenuFormComponent() {
  const formik = useFormik({
    initialValues: {
      isFavouriteProduct: false,
      productImage: "",
      itemDisplayTag: "",
      name: "",
      price: 0,
      productDescription: "",
      productId: "",
    },
    validationSchema: Yup.object({
      productImage: Yup.string()
        .url("Invalid URL format")
        .required("Product Image is required"),
      itemDisplayTag: Yup.string().required("Item Display Tag is required"),
      name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Product Name must not contain numbers")
        .required("Product Name is required"),
      price: Yup.number()
        .required("Price is required")
        .min(0, "Price must be a positive number"),
      productDescription: Yup.string().required(
        "Product Description is required"
      ),
      productId: Yup.string().required("Product ID is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      alert("Your menu item has been successfully added.");
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ml-96 m-4  ">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Menu Form</CardTitle>
          <CardDescription>Add a new item to your menu</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isFavouriteProduct"
                checked={formik.values.isFavouriteProduct}
                onCheckedChange={(checked) =>
                  formik.setFieldValue("isFavouriteProduct", checked)
                }
              />
              <Label htmlFor="isFavouriteProduct">Is Favourite Product</Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="productImage">Product Image (URL)</Label>
              <Input
                id="productImage"
                name="productImage"
                type="text"
                placeholder="Enter product image URL"
                {...formik.getFieldProps("productImage")}
                aria-invalid={
                  formik.touched.productImage && formik.errors.productImage
                    ? "true"
                    : "false"
                }
              />
              {formik.touched.productImage && formik.errors.productImage && (
                <p className="text-sm text-red-500" role="alert">
                  {formik.errors.productImage}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="itemDisplayTag">Item Display Tag</Label>
              <Input
                id="itemDisplayTag"
                name="itemDisplayTag"
                type="text"
                placeholder="Enter item display tag"
                {...formik.getFieldProps("itemDisplayTag")}
                aria-invalid={
                  formik.touched.itemDisplayTag && formik.errors.itemDisplayTag
                    ? "true"
                    : "false"
                }
              />
              {formik.touched.itemDisplayTag &&
                formik.errors.itemDisplayTag && (
                  <p className="text-sm text-red-500" role="alert">
                    {formik.errors.itemDisplayTag}
                  </p>
                )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter product name"
                {...formik.getFieldProps("name")}
                aria-invalid={
                  formik.touched.name && formik.errors.name ? "true" : "false"
                }
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-sm text-red-500" role="alert">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Enter price"
                min="0"
                step="0.01"
                {...formik.getFieldProps("price")}
                aria-invalid={
                  formik.touched.price && formik.errors.price ? "true" : "false"
                }
                className="no-spinner"
              />
              {formik.touched.price && formik.errors.price && (
                <p className="text-sm text-red-500" role="alert">
                  {formik.errors.price}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="productDescription">Product Description</Label>
              <Textarea
                id="productDescription"
                name="productDescription"
                placeholder="Enter product description"
                {...formik.getFieldProps("productDescription")}
                aria-invalid={
                  formik.touched.productDescription &&
                  formik.errors.productDescription
                    ? "true"
                    : "false"
                }
              />
              {formik.touched.productDescription &&
                formik.errors.productDescription && (
                  <p className="text-sm text-red-500" role="alert">
                    {formik.errors.productDescription}
                  </p>
                )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="productId">Product ID</Label>
              <Input
                id="productId"
                name="productId"
                type="text"
                placeholder="Enter product ID"
                {...formik.getFieldProps("productId")}
                aria-invalid={
                  formik.touched.productId && formik.errors.productId
                    ? "true"
                    : "false"
                }
              />
              {formik.touched.productId && formik.errors.productId && (
                <p className="text-sm text-red-500" role="alert">
                  {formik.errors.productId}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
