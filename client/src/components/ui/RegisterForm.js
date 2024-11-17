import { Select, SelectItem } from "@/components/ui/select";

// Inside the form
<div className="space-y-2">
  <Label htmlFor="role">Role</Label>
  <Select
    id="role"
    name="role"
    value={formik.values.role}
    onChange={formik.handleChange}
  >
    <SelectItem value="customer">Customer</SelectItem>
    <SelectItem value="rider">Rider</SelectItem>
    <SelectItem value="admin">Admin</SelectItem>
  </Select>
  {formik.touched.role && formik.errors.role ? (
    <p className="text-sm text-destructive">{formik.errors.role}</p>
  ) : null}
</div>;
