import { fireEvent, prettyDOM, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form, Title } from "@/form-register/components";

describe("Title", () => {
  it("should render the title", () => {
    render(<Title />);
    expect(screen.getByText("completa el formulario")).toBeInTheDocument();
  });
});

describe("Form component", () => {
  const mockCountry = {
    code: "CO",
    label: "Colombia",
    phone: "57",
  };

  const mockObjConfigurationAutocomplete = {
    country: {
      options: [
        { code: "CN", label: "China", phone: "86" },
        { code: "CO", label: "Colombia", phone: "57" },
        { code: "CR", label: "Costa Rica", phone: "506" },
      ],
    },
    proposalJob: {
      options: [
        {
          value: "01HYPWTREKWRSJ092E7B521QTX",
          label: "Líder Tecnico PHP/Java",
        },
      ],
    },
  };

  const setup = () =>
    render(<Form defaultValue={mockCountry} objConfigurationAutocomplete={mockObjConfigurationAutocomplete} />);

  it("should render the input email component", () => {
    setup();
    expect(screen.getByLabelText(/Email */i)).toBeInTheDocument();
  });

  it("should display error message when email is invalid", async () => {
    setup();
    const inputEmail = screen.getByLabelText(/Email */i);
    fireEvent.change(inputEmail, { target: { value: "invalid-email" } });
    fireEvent.submit(
      screen.getByRole("button", {
        name: /enviar/i,
      })
    );
    expect(await screen.findByText(/El email no es válido/i)).toBeInTheDocument();
    expect(inputEmail).toHaveValue("invalid-email");
  });

  it("should render the autocomplete component", () => {
    setup();
    expect(screen.getByLabelText(/País/i)).toBeInTheDocument();
  });

  it("should filter values dropdown when user types in autocomplete proposal", async () => {
    setup();
    const autocomplete = await waitFor(() => screen.findByLabelText(/Oferta/i));

    expect(autocomplete).toBeInTheDocument();
    fireEvent.focus(autocomplete);
    fireEvent.change(autocomplete, { target: { value: "php" } });
    const listbox = await waitFor(() => screen.getByRole("listbox"), { timeout: 2000 });
    expect(within(listbox).queryAllByRole("option").length).toBe(1);
  });

  it("should filter values dropdown when user types in autocomplete countries", async () => {
    setup();
    const autocomplete = await waitFor(() => screen.findByLabelText(/País/i));
    expect(autocomplete).toBeInTheDocument();
    fireEvent.focus(autocomplete);
    fireEvent.change(autocomplete, { target: { value: "col" } });
    const listbox = await waitFor(() => screen.getByRole("listbox"), { timeout: 2000 });
    expect(within(listbox).queryAllByRole("option").length).toBe(1);
  });

  it("should render the input file", () => {
    setup();
    const input = screen.getByLabelText(/click para subir archivo/i);
    expect(input).toBeInTheDocument();
  });

  it("upload file", async () => {
    const user = userEvent.setup();
    setup();
    const file = new File(["(⌐□_□)"], "cv.pdf", { type: "application/pdf" });
    const input = screen.getByLabelText(/click para subir archivo/i);

    await user.upload(input as HTMLInputElement, file);

    expect((input as HTMLInputElement).files).toHaveLength(1);
  });
});
