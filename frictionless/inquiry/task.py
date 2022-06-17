from __future__ import annotations
from typing import Optional
from ..metadata2 import Metadata2
from ..checklist import Checklist
from ..dialect import Dialect
from ..schema import Schema
from ..file import File
from .. import settings
from .. import errors


class InquiryTask(Metadata2):
    """Inquiry task representation.

    Parameters:
        descriptor? (str|dict): descriptor

    Raises:
        FrictionlessException: raise any error that occurs during the process

    """

    def __init__(
        self,
        *,
        descriptor: Optional[str] = None,
        type: Optional[str] = None,
        path: Optional[str] = None,
        name: Optional[str] = None,
        scheme: Optional[str] = None,
        format: Optional[str] = None,
        hashing: Optional[str] = None,
        encoding: Optional[str] = None,
        innerpath: Optional[str] = None,
        compression: Optional[str] = None,
        dialect: Optional[Dialect] = None,
        schema: Optional[Schema] = None,
        checklist: Optional[Checklist] = None,
    ):
        self.descriptor = descriptor
        self.path = path
        self.name = name
        self.scheme = scheme
        self.format = format
        self.hashing = hashing
        self.encoding = encoding
        self.innerpath = innerpath
        self.compression = compression
        self.dialect = dialect
        self.schema = schema
        self.checklist = checklist
        self.__type = type

    # Properties

    descriptor: Optional[str]
    """# TODO: add docs"""

    path: Optional[str]
    """# TODO: add docs"""

    name: Optional[str]
    """# TODO: add docs"""

    scheme: Optional[str]
    """# TODO: add docs"""

    format: Optional[str]
    """# TODO: add docs"""

    hashing: Optional[str]
    """# TODO: add docs"""

    encoding: Optional[str]
    """# TODO: add docs"""

    innerpath: Optional[str]
    """# TODO: add docs"""

    compression: Optional[str]
    """# TODO: add docs"""

    dialect: Optional[Dialect]
    """# TODO: add docs"""

    schema: Optional[Schema]
    """# TODO: add docs"""

    checklist: Optional[Checklist]
    """# TODO: add docs"""

    # TODO: review
    @property
    def type(self) -> str:
        """
        Returns:
            any: type
        """
        type = self.__type
        if not type:
            type = "resource"
            if self.descriptor:
                file = File(self.descriptor)
                type = "package" if file.type == "package" else "resource"
        return type

    @type.setter
    def type(self, value: str):
        self.__type = value

    # Convert

    # Metadata

    metadata_Error = errors.InquiryError
    metadata_profile = settings.INQUIRY_PROFILE["properties"]["tasks"]["items"]
    metadata_properties = [
        {"name": "descriptor"},
        {"name": "type"},
        {"name": "path"},
        {"name": "name"},
        {"name": "scheme"},
        {"name": "format"},
        {"name": "hashing"},
        {"name": "encoding"},
        {"name": "innerpath"},
        {"name": "compression"},
        {"name": "dialect", "type": Dialect},
        {"name": "schema", "type": Schema},
        {"name": "checklist", "type": Checklist},
    ]

    # TODO: validate type/descriptor
    def metadata_validate(self):
        yield from super().metadata_validate()

    def metadata_export(self):
        descriptor = super().metadata_export()
        if not self.__type:
            descriptor.pop("type")
        return descriptor
